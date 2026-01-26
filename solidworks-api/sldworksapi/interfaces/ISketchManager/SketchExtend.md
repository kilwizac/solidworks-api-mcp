---
type: method
interface: ISketchManager
member: SketchExtend
returns: System.Boolean
parameters:
  -
    name: X
    type: System.Double
    description: Specify 0.0
  -
    name: Y
    type: System.Double
    description: Specify 0.0
  -
    name: Z
    type: System.Double
    description: Specify 0.0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.SketchTrim
keywords:
  - sketch
  - see
  - also
  - isketch
  - extend
  - entities
  - sketchextend
  - isketchmanager
  - manager
  - double
  - boolean
  - entity
  - vba
  - vb
  - net
---

# ISketchManager.SketchExtend

Adds to the length of the selected sketch entity (i.e., line, centerline, or arc) to meet the nearest sketch entity.

## Signature

```csharp
System.Boolean SketchExtend( 
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

- `X` (System.Double): Specify 0.0
- `Y` (System.Double): Specify 0.0
- `Z` (System.Double): Specify 0.0

## Return Value

True if the sketch entity is extended to meet the nearest sketch entity, false if not

## Remarks

Call this method multiple times to extend the selected line to meet successive sketch entities.

## Examples

- Extend Sketch Entity (VBA) (Extend_Sketch_Entity_Example_VB.htm)
- Extend Sketch Entity (VB.NET) (Extend_Sketch_Entity_Example_VBNET.htm)
- Extend Sketch Entity (C#) (Extend_Sketch_Entity_Example_CSharp.htm)

## See Also

- `ISketchManager.SketchTrim`