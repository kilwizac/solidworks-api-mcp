---
type: method
interface: IMidSurface2
member: IGetFirstFace
returns: Face2
parameters:
  -
    name: FromFace1Disp
    type: Face2
    description: Face on the original part body used in generating the neutral face
  -
    name: FromFace2Disp
    type: Face2
    description: Parallel face to FromFace1Disp on the original part body used in generating the neutral face
  -
    name: Thickness
    type: System.Double
    description: Distance between the two parallel faces, FromFace1Disp and FromFace2Disp
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - geometry
related:
  - IMidSurface2.GetFaceCount
  - IMidSurface2.GetFirstFace
  - IMidSurface2.GetNextFace
keywords:
  - igetfirstface
  - imidsurface2
  - mid
  - surface2
  - first
  - face
  - face1
  - disp
  - face2
  - thickness
  - double
---

# IMidSurface2.IGetFirstFace

Obsolete. Superseded by IMidSurface3::IGetFirstFace.

## Signature

```csharp
Face2 IGetFirstFace( 
   out Face2
FromFace1Disp
,
   out Face2
FromFace2Disp
,
   out System.Double
Thickness
)
```
## Parameters

- `FromFace1Disp` (Face2): Face on the original part body used in generating the neutral face
- `FromFace2Disp` (Face2): Parallel face to FromFace1Disp on the original part body used in generating the neutral face
- `Thickness` (System.Double): Distance between the two parallel faces, FromFace1Disp and FromFace2Disp

## Return Value

First face in this midsurface feature

## Remarks

The first two return values are the two faces from the original part body that were used to generate this midsurface face.
The next return value is the thickness (in meters) between the two parallel faces from the original part body.
The last return value is the first face in this midsurface feature.
Use
IMidSurface2::IGetNextFace
to get the next neutral face in this midsurface feature.

## See Also

- `IMidSurface2.GetFaceCount`
- `IMidSurface2.GetFirstFace`
- `IMidSurface2.GetNextFace`