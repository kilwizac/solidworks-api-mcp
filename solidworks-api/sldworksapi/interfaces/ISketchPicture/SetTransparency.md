---
type: method
interface: ISketchPicture
member: SetTransparency
returns: System.Boolean
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
related:
  - ISketchPicture.GetOrigin
keywords:
  - settransparency
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
  - boolean
---

# ISketchPicture.SetTransparency

Sets the transparency parameters of this picture on the sketch.

## Signature

```csharp
System.Boolean SetTransparency( 
   System.Int32
Style
,
   System.Double
Transparency
,
   System.Int32
MatchingColor
,
   System.Double
MatchingTolerance
)
```
## Parameters

- `Style` (System.Int32): Style as defined by swSketchPictureTransparencyStyle_e
- `Transparency` (System.Double): 0 = opaque 1 = transparent describing the relative transparency depending on the value of Style
- `MatchingColor` (System.Int32): RGB color used as the transparent color when Style is swSketchPictureTransparencyUserDefined
- `MatchingTolerance` (System.Double): 0 = exact match 1 = less exact match indicating how closely MatchingColor must be to be considered a transparent color when Style is swSketchPictureTransparencyUserDefined

## Return Value

True if transparency is set, false if not

## See Also

- `ISketchPicture.GetOrigin`