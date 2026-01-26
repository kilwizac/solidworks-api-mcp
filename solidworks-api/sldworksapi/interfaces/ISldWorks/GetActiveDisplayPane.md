---
type: method
interface: ISldWorks
member: GetActiveDisplayPane
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDocExtension.IsDisplayPaneVisible
keywords:
  - getactivedisplaypane
  - isldworks
  - sld
  - works
  - active
  - display
  - pane
  - int32
  - create
  - task
  - view
  - add
---

# ISldWorks.GetActiveDisplayPane

Gets the active Display Pane.

## Signature

```csharp
System.Int32 GetActiveDisplayPane()
```
## Parameters

None.

## Return Value

Active display pane as defined by swDisplayPaneIndex_e

## Examples

- Create Task Pane View Add-in (C#) (Create_TaskPaneView_Add-in_Example_CSharp.htm)

## See Also

- `IModelDocExtension.IsDisplayPaneVisible`