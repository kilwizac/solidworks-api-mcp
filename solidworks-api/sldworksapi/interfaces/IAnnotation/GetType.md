---
type: method
interface: IAnnotation
member: GetType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - gettype
  - iannotation
  - annotation
  - type
  - int32
  - change
  - text
  - format
  - vba
  - display
  - dimensions
  - gtols
  - surface
  - finish
  - symbols
  - entities
  - attached
  - cosmetic
  - thread
  - types
  - selected
  - dimension
  - show
  - drawing
  - sheet
  - dimxpert
  - feature
  - vb
  - net
---

# IAnnotation.GetType

Gets the type of the annotation.

## Signature

```csharp
System.Int32 GetType()
```
## Parameters

None.

## Return Value

Type of the annotation as defined in swAnnotationType_e

## Remarks

If this annotation contains only Product and Manufacturing Information (PMI), then this method returns swAnnotationType_e.swPMIOnly. In that case, use
IAnnotation::GetPMIType
and
IAnnotation::GetPMIData
to obtain the PMI data associated with this annotation.
This method is useful when the IAnnotation object is obtained with
IAnnotation::GetSpecificAnnotation
or
IAnnotation::IGetSpecificAnnotation
.

## Examples

- Change Text Format (VBA) (Change_Text_Format_Example_VB.htm)
- Get Display Dimensions, GTols, and Surface-finish Symbols (VBA) (Get_Display_Dimensions,_Gtols,_and_Surface-Finish_Symbols_Example_VB.htm)
- Get Entities Attached to Cosmetic Thread (VBA) (Get_Entities_Attached_To_Cosmetic_Thread_Example_VB.htm)
- Get Types of Entities for Selected Dimension (VBA) (Get_Types_of_Entities_for_Selected_Dimension_Example_VB.htm)
- Show Dimensions in Drawing Sheet (VBA) (Show_Dimensions_in_Drawing_Sheet_Example_VB.htm)
- Get DimXpert Display Dimensions and Feature (C#) (Get_DimXpert_Display_Dimensions_and_Feature_Example_CSharp.htm)
- Get DimXpert Display Dimensions and Feature (VB.NET) (Get_DimXpert_Display_Dimensions_and_Feature_Example_VBNET.htm)
- Get DimXpert Display Dimensions and Feature (VBA) (Get_DimXpert_Display_Dimensions_and_Feature_Example_VB.htm)