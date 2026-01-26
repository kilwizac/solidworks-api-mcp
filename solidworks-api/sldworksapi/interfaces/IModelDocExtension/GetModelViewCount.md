---
type: method
interface: IModelDocExtension
member: GetModelViewCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDoc2.GetFirstModelView
  - IModelDoc2.IGetFirstModelView
  - IModelDocExtension.GetModelViews
  - IModelView.GetNext
  - IModelView.IGetNext
keywords:
  - getmodelviewcount
  - imodeldocextension
  - model
  - doc
  - extension
  - view
  - count
  - int32
  - scale
  - factor
  - each
  - vb
  - net
  - vba
---

# IModelDocExtension.GetModelViewCount

Gets the number of model views in this document.

## Signature

```csharp
System.Int32 GetModelViewCount()
```
## Parameters

None.

## Return Value

Number of model views

## Remarks

Call this method before calling
IModelDocExtension::IGetModelViews
to determine the size of the array for that method.

## Examples

- Get Scale Factor of Each Model View (C++) (Get_Scale_of_Each_Model_View_Example_CPlusPlus_COM.htm)
- Get Scale Factor of Each Model View (C#) (Get_Scale_of_Each_Model_View_Example_CSharp.htm)
- Get Scale Factor of Each Model View (VB.NET) (Get_Scale_of_Each_Model_View_Example_VBNET.htm)
- Get Scale Factor of Each Model View (VBA) (Get_Scale_of_Each_Model_View_Example_VB.htm)

## See Also

- `IModelDoc2.GetFirstModelView`
- `IModelDoc2.IGetFirstModelView`
- `IModelDocExtension.GetModelViews`
- `IModelView.GetNext`
- `IModelView.IGetNext`