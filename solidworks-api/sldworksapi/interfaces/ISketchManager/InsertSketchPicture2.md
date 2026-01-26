---
type: method
interface: ISketchManager
member: InsertSketchPicture2
returns: SketchPicture
parameters:
  -
    name: FileName
    type: System.String
    description: Path to image file including file extension
  -
    name: HighestResolution
    type: System.Boolean
    description: True to insert images up to 8192 pixels without compression, false to compress images to 2048 pixels before insertion (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - sketch
  - see
  - also
  - isketch
  - pictures
  - bitmaps
  - sketches
  - insertsketchpicture2
  - isketchmanager
  - manager
  - insert
  - picture2
  - file
  - name
  - string
  - highest
  - resolution
  - boolean
  - picture
  - flip
  - vba
  - vb
  - net
---

# ISketchManager.InsertSketchPicture2

Inserts a picture on the current drawing sketch.

## Signature

```csharp
SketchPicture InsertSketchPicture2( 
   System.String
FileName
,
   System.Boolean
HighestResolution
)
```
## Parameters

- `FileName` (System.String): Path to image file including file extension
- `HighestResolution` (System.Boolean): True to insert images up to 8192 pixels without compression, false to compress images to 2048 pixels before insertion (see Remarks )

## Return Value

Picture

## Remarks

If the document type is not a drawing, then HighestResolution defaults to false.

## Examples

- Flip Sketch Picture (VBA) (Flip_Sketch_Picture_Example_VB.htm)
- Flip Sketch Picture (VB.NET) (Flip_Sketch_Picture_Example_VBNET.htm)
- Flip Sketch Picture (C#) (Flip_Sketch_Picture_Example_CSharp.htm)