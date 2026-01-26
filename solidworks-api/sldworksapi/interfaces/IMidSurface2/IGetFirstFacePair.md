---
type: method
interface: IMidSurface2
member: IGetFirstFacePair
returns: Face2
parameters:
  -
    name: Thickness
    type: System.Double
    description: Distance between these two parallel faces
  -
    name: PartnerFaceDisp
    type: Face2
    description: Face on the original part body used in generating the neutral face
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - geometry
related:
  - IMidSurface2.GetFacePairCount
  - IMidSurface2.GetFirstFacePair
  - IMidSurface2.GetNextFacePair
keywords:
  - igetfirstfacepair
  - imidsurface2
  - mid
  - surface2
  - first
  - face
  - pair
  - thickness
  - double
  - partner
  - disp
  - face2
---

# IMidSurface2.IGetFirstFacePair

Obsolete. Superseded by IMidSurface3::IGetFirstFacePair.

## Signature

```csharp
Face2 IGetFirstFacePair( 
   out System.Double
Thickness
,
   out Face2
PartnerFaceDisp
)
```
## Parameters

- `Thickness` (System.Double): Distance between these two parallel faces
- `PartnerFaceDisp` (Face2): Face on the original part body used in generating the neutral face

## Return Value

Face on the original part body used in generating the neutral face

## Remarks

The two faces returned by this method are the two parallel faces from the original part body that were used to generate the first neutral face in this midsurface feature.
This method is similar to
IMidSurface2::IGetFirstFace
, except this method does not return the neutral face.
Call
IMidSurface2::IGetNextFacePair
to get the next pair of faces in this midsurface feature.

## See Also

- `IMidSurface2.GetFacePairCount`
- `IMidSurface2.GetFirstFacePair`
- `IMidSurface2.GetNextFacePair`