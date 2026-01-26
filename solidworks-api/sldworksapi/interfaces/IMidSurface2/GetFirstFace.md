---
type: method
interface: IMidSurface2
member: GetFirstFace
returns: System.Object
parameters:
  -
    name: FromFace1Disp
    type: System.Object
    description: Face on the original part body used in generating the neutral face
  -
    name: FromFace2Disp
    type: System.Object
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
  - IMidSurface2.IGetFirstFace
  - IMidSurface2.IGetNextFace
keywords:
  - getfirstface
  - imidsurface2
  - mid
  - surface2
  - first
  - face
  - face1
  - disp
  - object
  - face2
  - thickness
  - double
---

# IMidSurface2.GetFirstFace

Obsolete. Superseded by IMidSurface3::GetFirstFace.

## Signature

```csharp
System.Object GetFirstFace( 
   out System.Object
FromFace1Disp
,
   out System.Object
FromFace2Disp
,
   out System.Double
Thickness
)
```
## Parameters

- `FromFace1Disp` (System.Object): Face on the original part body used in generating the neutral face
- `FromFace2Disp` (System.Object): Parallel face to FromFace1Disp on the original part body used in generating the neutral face
- `Thickness` (System.Double): Distance between the two parallel faces, FromFace1Disp and FromFace2Disp

## Return Value

First face in this midsurface feature

## Remarks

The first two return values are the two faces from the original part body that were used to generate this midsurface face.
The next return value is the thickness (in meters) between the two parallel faces from the original part body.
The last return value is the first face in this midsurface feature.
Use
IMidSurface2::GetNextFace
to get the next neutral face in this midsurface feature.

## See Also

- `IMidSurface2.GetFaceCount`
- `IMidSurface2.IGetFirstFace`
- `IMidSurface2.IGetNextFace`