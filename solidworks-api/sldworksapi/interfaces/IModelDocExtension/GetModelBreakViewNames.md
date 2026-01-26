---
type: method
interface: IModelDocExtension
member: GetModelBreakViewNames
returns: System.Int32
parameters:
  -
    name: Views
    type: System.Object
    description: Names of Model Break Views
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.ShowModelBreakView
  - IView3D.ModelBreakViewName
keywords:
  - model
  - break
  - views
  - names
  - getmodelbreakviewnames
  - imodeldocextension
  - doc
  - extension
  - view
  - object
  - int32
  - show
  - vb
  - net
  - vba
---

# IModelDocExtension.GetModelBreakViewNames

Gets the names and number of the Model Break Views in the current configuration of the active model.

## Signature

```csharp
System.Int32 GetModelBreakViewNames( 
   out System.Object
Views
)
```
## Parameters

- `Views` (System.Object): Names of Model Break Views

## Return Value

Number of Model Break Views

## Examples

- Get Names and Show Model Break Views (C#) (Get_Names_and_Show_Model_Break_Views_Example_CSharp.htm)
- Get Names and Show Model Break Views (VB.NET) (Get_Names_and_Show_Model_Break_Views_Example_VBNET.htm)
- Get Names and Show Model Break Views (VBA) (Get_Names_and_Show_Model_Break_Views_Example_VB.htm)

## See Also

- `IModelDocExtension.ShowModelBreakView`
- `IView3D.ModelBreakViewName`