---
type: method
interface: IAnnotation
member: GetNext3
returns: Annotation
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IView.GetFirstAnnotation3
keywords:
  - traverse
  - annotations
  - getnext3
  - iannotation
  - annotation
  - next3
  - display
  - dimensions
  - gtols
  - surface
  - finish
  - symbols
  - vba
  - entities
  - attached
  - cosmetic
  - thread
  - show
  - drawing
  - sheet
  - dimxpert
  - feature
  - vb
  - net
---

# IAnnotation.GetNext3

Gets the next annotation.

## Signature

```csharp
Annotation GetNext3()
```
## Parameters

None.

## Return Value

IAnnotation

## Remarks

This method:
retrieves all display dimensions, including suppressed, hidden, and dangling dimensions, on the sheet and on the sheet format if it is visible. See
ISheet::SheetFormatVisible
for details.
retrieves all instances of a dimension. For example, if a (4X) instance dimension is visible in the user interface, this method gets the 4X dimension and each of its four dimension instances.
retrieves an annotation, even if it is on a layer that is not displayed.
A dimension is suppressed or hidden when you:
specifically select a dimension and hide it.
- or -
select a feature and hide all dimensions.
If you need to filter out suppressed or hidden dimensions, use
IAnnotation::Visible
to check the visibility status.
To get the first annotation on the sheet, call
IView::GetFirstAnnotation3
before calling this method.

## Examples

- Get Display Dimensions, GTols, and Surface-finish Symbols (VBA) (Get_Display_Dimensions,_Gtols,_and_Surface-Finish_Symbols_Example_VB.htm)
- Get Entities Attached to Cosmetic Thread (VBA) (Get_Entities_Attached_To_Cosmetic_Thread_Example_VB.htm)
- Show Dimensions in Drawing Sheet (VBA) (Show_Dimensions_in_Drawing_Sheet_Example_VB.htm)
- Get DimXpert Display Dimensions and Feature (C#) (Get_DimXpert_Display_Dimensions_and_Feature_Example_CSharp.htm)
- Get DimXpert Display Dimensions and Feature (VB.NET) (Get_DimXpert_Display_Dimensions_and_Feature_Example_VBNET.htm)
- Get DimXpert Display Dimensions and Feature (VBA) (Get_DimXpert_Display_Dimensions_and_Feature_Example_VB.htm)

## See Also

- `IView.GetFirstAnnotation3`