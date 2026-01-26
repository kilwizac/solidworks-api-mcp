---
type: method
interface: ISketchPicture
member: GetTransparency
returns: void
parameters:
  -
    name: Style
    type: System.Int32
    description: Style as defined by swSketchPictureTransparencyStyle_e
  -
    name: Transparency
    type: System.Double
    description: 0 = opaque 1 = transparent describing the relative transparency depending on the value of Style
  -
    name: MatchingColor
    type: System.Int32
    description: RGB color used as the transparent color when Style is swSketchPictureTransparencyUserDefined
  -
    name: MatchingTolerance
    type: System.Double
    description: 0 = exact match 1 = less exact match indicating how closely MatchingColor must be to be considered a transparent color when Style is swSketchPictureTransparencyUserDefined
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related: []
keywords:
  - gettransparency
  - isketchpicture
  - sketch
  - picture
  - transparency
  - style
  - int32
  - double
  - matching
  - color
  - tolerance
  - void
---

# ISketchPicture.GetTransparency

Gets transparency parameters for this picture.

## Signature

```csharp
void GetTransparency( 
   out System.Int32
Style
,
   out System.Double
Transparency
,
   out System.Int32
MatchingColor
,
   out System.Double
MatchingTolerance
)
```
## Parameters

- `Style` (System.Int32): Style as defined by swSketchPictureTransparencyStyle_e
- `Transparency` (System.Double): 0 = opaque 1 = transparent describing the relative transparency depending on the value of Style
- `MatchingColor` (System.Int32): RGB color used as the transparent color when Style is swSketchPictureTransparencyUserDefined
- `MatchingTolerance` (System.Double): 0 = exact match 1 = less exact match indicating how closely MatchingColor must be to be considered a transparent color when Style is swSketchPictureTransparencyUserDefined

## Return Value

Unknown.