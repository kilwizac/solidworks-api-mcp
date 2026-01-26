---
type: property
interface: IModelView
member: Scale2
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.GetEyePoint
  - IModelView.GetIsoPlaneDistance
  - IModelView.GetViewPlaneDistance
  - IModelView.IGetEyePoint
  - IModelView.ISetEyePoint
  - IModelView.SetEyePoint
keywords:
  - scale
  - see
  - also
  - iscalefeaturedata
  - model
  - view
  - scale2
  - imodelview
  - double
  - factor
  - each
  - vb
  - net
  - vba
readonly: null
---

# IModelView.Scale2

Gets and sets the model view scale factor.

## Signature

```csharp
System.Double Scale2 {get; set;}
```
## Parameters

None.

## Return Value

Scale factor

## Remarks

If you want to zoom in by a factor of 2, then you should get the current scale using this method, multiply the return value by 2, and then pass that value back into this method, which will increase the model view scale.
Using data returned from this property along with information from
IModelView::Orientation3
and
IModelView::Translation3
should be multiplied in this
order: orientation > scale > transform.
To map your coordinates from 3D space to the screen, use
IModelView::Transform
.

## Examples

- Get Scale Factor of Each Model View (C++) (Get_Scale_of_Each_Model_View_Example_CPlusPlus_COM.htm)
- Get Scale Factor of Each Model View (C#) (Get_Scale_of_Each_Model_View_Example_CSharp.htm)
- Get Scale Factor of Each Model View (VB.NET) (Get_Scale_of_Each_Model_View_Example_VBNET.htm)
- Get Scale Factor of Each Model View (VBA) (Get_Scale_of_Each_Model_View_Example_VB.htm)

## See Also

- `IModelView.GetEyePoint`
- `IModelView.GetIsoPlaneDistance`
- `IModelView.GetViewPlaneDistance`
- `IModelView.IGetEyePoint`
- `IModelView.ISetEyePoint`
- `IModelView.SetEyePoint`