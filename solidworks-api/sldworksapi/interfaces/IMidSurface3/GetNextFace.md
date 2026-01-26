---
type: method
interface: IMidSurface3
member: GetNextFace
returns: System.Object
parameters:
  -
    name: FromFace1Disp
    type: System.Object
    description: Face on the original part body used in generating the neutral face
  -
    name: FromFace2Disp
    type: System.Object
    description: Face on the original part body used in generating the neutral face
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
  - IMidSurface3.IGetFirstFace
  - IMidSurface3.IGetNextFace
keywords:
  - getnextface
  - imidsurface3
  - mid
  - surface3
  - next
  - face
  - face1
  - disp
  - object
  - face2
  - thickness
  - double
---

# IMidSurface3.GetNextFace

Gets the next neutral face in this midsurface feature.

## Signature

```csharp
System.Object GetNextFace( 
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
- `FromFace2Disp` (System.Object): Face on the original part body used in generating the neutral face
- `Thickness` (System.Double): Distance between the two parallel faces, FromFace1Disp and FromFace2Disp

## Return Value

Face in this midsurface feature

## Remarks

Call
IMidSurface3::GetFirstFace
before calling this method to get the first neutral face.
This method returns the next neutral face in this midsurface feature along with three other items.
The first two return values are the two faces from the original part body that were used to generate this neutral midsurface face.
The next return value is the thickness (in meters) between the two parallel faces from the original part body.
The last return value is the neutral face in this midsurface feature.

## See Also

- `IMidSurface3.GetFaceCount`
- `IMidSurface3.IGetFirstFace`
- `IMidSurface3.IGetNextFace`