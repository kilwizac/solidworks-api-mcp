---
type: method
interface: ISldWorks
member: ActivateTaskPane
returns: System.Boolean
parameters:
  -
    name: TaskPaneID
    type: System.Int32
    description: ID of task pane as defined in swTaskPaneTab_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.CreateTaskpaneView2
  - ISldWorks.RefreshTaskpaneContent
  - ISldWorks.TaskPaneIsPinned
  - ITaskpaneView
keywords:
  - task
  - pane
  - see
  - also
  - itaskpaneview
  - activate
  - activatetaskpane
  - isldworks
  - sld
  - works
  - id
  - int32
  - boolean
---

# ISldWorks.ActivateTaskPane

Activates the specified task pane.

## Signature

```csharp
System.Boolean ActivateTaskPane( 
   System.Int32
TaskPaneID
)
```
## Parameters

- `TaskPaneID` (System.Int32): ID of task pane as defined in swTaskPaneTab_e

## Return Value

True if the specified task pane is activated, false if not

## See Also

- `ISldWorks.CreateTaskpaneView2`
- `ISldWorks.RefreshTaskpaneContent`
- `ISldWorks.TaskPaneIsPinned`
- `ITaskpaneView`