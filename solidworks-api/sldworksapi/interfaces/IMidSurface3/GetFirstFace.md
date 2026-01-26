---
type: method
interface: IMidSurface3
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
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IMidSurface3.GetFaceCount
  - IMidSurface3.GetNextFace
  - IMidSurface3.IGetFirstFace
  - IMidSurface3.IGetNextFace
keywords:
  - getfirstface
  - imidsurface3
  - mid
  - surface3
  - first
  - face
  - face1
  - disp
  - object
  - face2
  - thickness
  - double
---

# IMidSurface3.GetFirstFace

Gets the first face in this midsurface feature and three other items.

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
IMidSurface3::GetNextFace
to get the next neutral face in this midsurface feature.

## See Also

- `IMidSurface3.GetFaceCount`
- `IMidSurface3.GetNextFace`
- `IMidSurface3.IGetFirstFace`
- `IMidSurface3.IGetNextFace`