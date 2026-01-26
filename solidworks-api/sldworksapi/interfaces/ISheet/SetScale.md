---
type: method
interface: ISheet
member: SetScale
returns: System.Boolean
parameters:
  -
    name: Numerator
    type: System.Double
    description: First value in the scale ratio (n : n)
  -
    name: Denominator
    type: System.Double
    description: Second value in the scale ratio (n : n)
  -
    name: ScaleAnnoPosition
    type: System.Boolean
    description: True if the position of the annotations is scaled, false if not
  -
    name: ScaleAnnoTextHeight
    type: System.Boolean
    description: True if the text height of the annotations is scaled, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ISheet.GetSize
keywords:
  - scale
  - see
  - also
  - iscalefeaturedata
  - sheets
  - sheet
  - isheet
  - setscale
  - numerator
  - double
  - denominator
  - anno
  - position
  - boolean
  - text
  - height
  - annotations
  - arrays
  - vb
  - net
  - vba
---

# ISheet.SetScale

Sets the scale for this drawing sheet.

## Signature

```csharp
System.Boolean SetScale( 
   System.Double
Numerator
,
   System.Double
Denominator
,
   System.Boolean
ScaleAnnoPosition
,
   System.Boolean
ScaleAnnoTextHeight
)
```
## Parameters

- `Numerator` (System.Double): First value in the scale ratio (n : n)
- `Denominator` (System.Double): Second value in the scale ratio (n : n)
- `ScaleAnnoPosition` (System.Boolean): True if the position of the annotations is scaled, false if not
- `ScaleAnnoTextHeight` (System.Boolean): True if the text height of the annotations is scaled, false if not

## Return Value

True if the scale is set, false if not

## Remarks

You can get the two scale values from the sheet by using
ISheet::GetProperties
or
ISheet::IGetProperties
.
You can also set the two scale values by using
IDrawingDoc::SetupSheet4
or
ISheet::SetProperties
. However, you cannot specify the scaling of the position or text height of the annotations. Instead, both of these methods automatically scale the position of the annotations but do not scale the text height of the annotations when the drawing is changed.

## Examples

- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)

## See Also

- `ISheet.GetSize`