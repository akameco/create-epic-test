import { TestScheduler } from 'rxjs'
import { ActionsObservable } from 'redux-observable'

export const createEpicTest = (epic, dependencies = {}) => (
  title,
  { input$, expect$, values }
) => {
  test(title, () => {
    const testScheduler = new TestScheduler((expected, actual) => {
      expect(expected).toEqual(actual)
    })
    const cold = testScheduler.createColdObservable.bind(testScheduler)

    const test$ = epic(
      new ActionsObservable(cold(input$, values)),
      testScheduler,
      dependencies
    )

    testScheduler.expectObservable(test$).toBe(expect$, values)
    testScheduler.flush()
  })
}
