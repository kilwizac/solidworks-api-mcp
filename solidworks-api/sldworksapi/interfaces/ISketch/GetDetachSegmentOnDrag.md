---
type: method
interface: ISketch
member: GetDetachSegmentOnDrag
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.SetDetachSegmentOnDrag
keywords:
  - detach
  - segment
  - drag
  - sketch
  - see
  - also
  - isketch
  - segments
  - getdetachsegmentondrag
  - boolean
---

# ISketch.GetDetachSegmentOnDrag

Gets the Detach Segment on Drag setting.

## Signature

```csharp
System.Boolean GetDetachSegmentOnDrag()
```
## Parameters

None.

## Return Value

True if Detach Segment on Drag is selected, false if not

## Remarks

Although this setting can be returned or set at any time, SOLIDWORKS sets it to false upon exiting or entering a sketch. Thus, this method is only useful if called while a sketch is active.

## See Also

- `ISketch.SetDetachSegmentOnDrag`