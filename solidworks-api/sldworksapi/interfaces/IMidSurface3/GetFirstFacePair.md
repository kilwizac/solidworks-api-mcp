---
type: method
interface: IMidSurface3
member: GetFirstFacePair
returns: System.Object
parameters:
  -
    name: Thickness
    type: System.Double
    description: Distance between these two parallel faces
  -
    name: PartnerFaceDisp
    type: System.Object
    description: Face on the original part body used in generating the neutral face
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IMidSurface2.GetFacePairCount
  - IMidSurface2.GetNextFacePair
  - IMidSurface2.IGetFirstFacePair
  - IMidSurface2.IGetNextFacePair
keywords:
  - getfirstfacepair
  - imidsurface3
  - mid
  - surface3
  - first
  - face
  - pair
  - thickness
  - double
  - partner
  - disp
  - object
---

# IMidSurface3.GetFirstFacePair

Gets the first pair of parallel faces in this midsurface feature and the thickness (in meters) between the two faces.

## Signature

```csharp
System.Object GetFirstFacePair( 
   out System.Double
Thickness
,
   out System.Object
PartnerFaceDisp
)
```
## Parameters

- `Thickness` (System.Double): Distance between these two parallel faces
- `PartnerFaceDisp` (System.Object): Face on the original part body used in generating the neutral face

## Return Value

Face on the original part body used in generating the neutral face

## Remarks

The two faces returned by this method are the two parallel faces from the original part body that were used to generate the first neutral face in this midsurface feature.
This method is similar to
IMidSurface3::GetFirstFace
, except this method does not return the neutral face.
Call
IMidSurface3::GetNextFacePair
to get the next pair of faces in this midsurface feature.

## See Also

- `IMidSurface2.GetFacePairCount`
- `IMidSurface2.GetNextFacePair`
- `IMidSurface2.IGetFirstFacePair`
- `IMidSurface2.IGetNextFacePair`