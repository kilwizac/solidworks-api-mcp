---
type: method
interface: IModelDoc2
member: SplitOpenSegment
returns: void
parameters:
  -
    name: X
    type: System.Double
    description: X value of the point that splits the sketch segment in two
  -
    name: Y
    type: System.Double
    description: Y value of the point that splits the sketch segment in two
  -
    name: Z
    type: System.Double
    description: Z value of the point that splits the sketch segment in two
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - IModelDoc2.SplitClosedSegment
  - ISketchSegment
keywords:
  - splitopensegment
  - imodeldoc2
  - model
  - doc2
  - split
  - open
  - segment
  - double
  - void
---

# IModelDoc2.SplitOpenSegment

Obsolete. Superseded by ISketchManager::SplitOpenSegment.

## Signature

```csharp
void SplitOpenSegment( 
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

- `X` (System.Double): X value of the point that splits the sketch segment in two
- `Y` (System.Double): Y value of the point that splits the sketch segment in two
- `Z` (System.Double): Z value of the point that splits the sketch segment in two

## Return Value

Unknown.

## Remarks

The selected sketch segment must be an open entity; for example, the start and end points cannot be the same.

## See Also

- `IModelDoc2.SplitClosedSegment`
- `ISketchSegment`