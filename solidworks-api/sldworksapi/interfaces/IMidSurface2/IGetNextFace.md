---
type: method
interface: IMidSurface2
member: IGetNextFace
returns: Face2
parameters:
  -
    name: FromFace1Disp
    type: Face2
    description: Face on the original part body used in generating the neutral face
  -
    name: FromFace2Disp
    type: Face2
    description: Face on the original part body used in generating the neutral face
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
  - igetnextface
  - imidsurface2
  - mid
  - surface2
  - next
  - face
  - face1
  - disp
  - face2
  - thickness
  - double
---

# IMidSurface2.IGetNextFace

Obsolete. Superseded by IMidSurface3::IGetNextFace.

## Signature

```csharp
Face2 IGetNextFace( 
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
- `FromFace2Disp` (Face2): Face on the original part body used in generating the neutral face
- `Thickness` (System.Double): Distance between the two parallel faces, FromFace1Disp and FromFace2Disp

## Return Value

Face in this midsurface feature

## Remarks

Call
IMidSurface2::IGetFirstFace
before calling this method to get the first neutral face.
This method returns the next neutral face in this midsurface feature along with three other items.
The first two return values are the two faces from the original part body that were used to generate this neutral midsurface face.
The next return value is the thickness (in meters) between the two parallel faces from the original part body.
The last return value is the neutral face in this midsurface feature.

## See Also

- `IMidSurface2.GetFaceCount`
- `IMidSurface2.GetFirstFace`
- `IMidSurface2.GetNextFace`