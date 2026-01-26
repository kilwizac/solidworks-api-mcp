---
type: method
interface: ISketchManager
member: SketchTrim
returns: System.Boolean
parameters:
  -
    name: Option
    type: System.Int32
    description: Sketch trim option as defined in swSketchTrimChoice_e (see Remarks )
  -
    name: X
    type: System.Double
    description: x coordinate of pick location (see Remarks )
  -
    name: Y
    type: System.Double
    description: y coordinate of pick location (see Remarks )
  -
    name: Z
    type: System.Double
    description: z coordinate of pick location (for 3D sketch) (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.SketchExtend
keywords:
  - sketch
  - see
  - also
  - isketch
  - trim
  - entities
  - sketchtrim
  - isketchmanager
  - manager
  - option
  - int32
  - double
  - boolean
  - vb
  - net
  - vba
---

# ISketchManager.SketchTrim

Trims the selected sketch entities.

## Signature

```csharp
System.Boolean SketchTrim( 
   System.Int32
Option
,
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `Option` (System.Int32): Sketch trim option as defined in swSketchTrimChoice_e (see Remarks )
- `X` (System.Double): x coordinate of pick location (see Remarks )
- `Y` (System.Double): y coordinate of pick location (see Remarks )
- `Z` (System.Double): z coordinate of pick location (for 3D sketch) (see Remarks )

## Return Value

True if the sketch entities are trimmed, false if not

## Remarks

Before calling this method, you must edit a sketch and select sketch segments to trim using
IModelDocExtension::SelectByID2
.
Specify X, Y, and Z with:
non-zero doubles only when Option is specified with swSketchTrimChoice_e.swSketchTrimEntityPoint.
0.0, 0.0, and 0.0 for all other Options.
Option swSketchTrimChoice_e...
Corresponds to Trim PropertyManager's...
Before calling this method, you must select...
swSketchTrimClosest
Trim to closest
One, and only one, sketch segment to be trimmed to its closest intersection with another sketch entity.
swSketchTrimCorner
Corner
Two, and only two, sketch segments to extend/trim to form a corner.
swSketchTrimEntities
Power trim
One or more (up to total number) sketch segments in the model, specifying their pick points. The sketch segments are trimmed to the sketch segments nearest the pick points.
When you trim sketch segments using Power trim in the user interface, you drag your cursor across sketch segments, and the point at which the cursor crosses a sketch segment is where that sketch segment is trimmed. The API simulates this functionality by requiring you to select sketch segments by pick points, which are used as references when trimming the selected sketch segments.
swSketchTrimEntityPoint
Power trim
One and only one sketch segment; trims to a specific point on the sketch segment. Call this method, specifying non-zero X, Y, and Z, the point at which to trim the selected sketch segment. The specified point must lie on the sketch segment.
swSketchTrimInside
Trim away inside
At least three sketch segments: two to create the boundary, and one or more that intersect both sketch segments in the boundary. All selected sketch segments that intersect the boundary are trimmed inside the boundary segments.
swSketchTrimOutside
Trim away outside
At least three sketch segments; two to create the trim boundary, and one or more that intersect both sketch segments in the boundary. All selected sketch segments that intersect the boundary are trimmed outside the boundary segments.
swSketchTrimTwoEntities
Power trim
Two intersecting sketch segments; trims the first selected sketch segment to the second intersecting sketch segment. Use IModelDocExtension::SelectByID2 with Mark = 0 to select two sketch segments, specifying their pick points. The order in which the sketch segments are selected determines which one is trimmed. The first selected sketch segment will be trimmed on its pick point side to the second selected sketch segment.
See the
Trim Entities
topic in the SOLIDWORKS help for more information about trimming sketch entities.

## Examples

- Trim Sketch Entities (C#) (Trim_Sketch_Entities_Example_CSharp.htm)
- Trim Sketch Entities (VB.NET) (Trim_Sketch_Entities_Example_VBNET.htm)
- Trim Sketch Entities (VBA) (Trim_Sketch_Entities_Example_VB.htm)

## See Also

- `ISketchManager.SketchExtend`