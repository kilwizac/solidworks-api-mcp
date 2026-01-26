---
type: method
interface: IBody2
member: GetProcessedBody2
returns: Body2
parameters:
  -
    name: MaxUAngle
    type: System.Double
    description: Maximum U angle
  -
    name: MaxVAngle
    type: System.Double
    description: Maximum V angle
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetProcessedBodyWithSelFace
  - IBody2.IGetProcessedBodyWithSelFace
  - IPartDoc.IGetProcessedBody2
keywords:
  - bodies
  - see
  - also
  - ibody2
  - processed
  - getprocessedbody2
  - body2
  - max
  - angle
  - double
  - process
  - body
  - vb
  - net
  - vba
---

# IBody2.GetProcessedBody2

Pre-processes the geometry of the body using the specified parameters.

## Signature

```csharp
Body2 GetProcessedBody2( 
   System.Double
MaxUAngle
,
   System.Double
MaxVAngle
)
```
## Parameters

- `MaxUAngle` (System.Double): Maximum U angle
- `MaxVAngle` (System.Double): Maximum V angle

## Return Value

Pointer to the body ; this body is a processed copy of the body for this part

## Remarks

Pre-processing (for example, IGES) is sometimes necessary for exporting to systems that have difficulty with periodic conditions.
Faces that lie on periodic surfaces that are not closed in the periodic direction might have bounds returned by
IFace2::GetUVBounds
that are on the periodic seam. Use
IModeler::SplitFaceOnParam
if the application needs to ensure that the face bounds lie completely on the surface bounds.
This method does not split at a seam unless the face is closed in that parameter. Splitting only occurs if the face has a parametric extent greater than the specified pitch.

## Examples

- Process Body (C#) (Process_Body_Example_CSharp.htm)
- Process Body (VB.NET) (Process_Body_Example_VBNET.htm)
- Process Body (VBA) (Process_Body_Example_VB.htm)

## See Also

- `IBody2.GetProcessedBodyWithSelFace`
- `IBody2.IGetProcessedBodyWithSelFace`
- `IPartDoc.IGetProcessedBody2`