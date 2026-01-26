---
type: method
interface: IModelDocExtension
member: ShowModelBreakView
returns: System.Boolean
parameters:
  -
    name: ShowView
    type: System.Boolean
    description: True to show the Model Break View, false to hide it
  -
    name: ViewName
    type: System.String
    description: Name of Model Break View to show or hide
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetModelBreakViewNames
keywords:
  - showmodelbreakview
  - imodeldocextension
  - model
  - doc
  - extension
  - show
  - break
  - view
  - boolean
  - name
  - string
  - names
  - views
  - vb
  - net
  - vba
---

# IModelDocExtension.ShowModelBreakView

Gets whether to show or hide the specified Model Break View in the current configuration of the active model.

## Signature

```csharp
System.Boolean ShowModelBreakView( 
   System.Boolean
ShowView
,
   System.String
ViewName
)
```
## Parameters

- `ShowView` (System.Boolean): True to show the Model Break View, false to hide it
- `ViewName` (System.String): Name of Model Break View to show or hide

## Return Value

True if the method executed, false if it did not

## Examples

- Get Names and Show Model Break Views (C#) (Get_Names_and_Show_Model_Break_Views_Example_CSharp.htm)
- Get Names and Show Model Break Views (VB.NET) (Get_Names_and_Show_Model_Break_Views_Example_VBNET.htm)
- Get Names and Show Model Break Views (VBA) (Get_Names_and_Show_Model_Break_Views_Example_VB.htm)

## See Also

- `IModelDocExtension.GetModelBreakViewNames`