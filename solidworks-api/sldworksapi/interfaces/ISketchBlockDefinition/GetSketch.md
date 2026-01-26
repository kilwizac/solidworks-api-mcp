---
type: method
interface: ISketchBlockDefinition
member: GetSketch
returns: Sketch
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - sketch
  - isketch
  - getsketch
  - block
  - definition
---

# ISketchBlockDefinition.GetSketch

Gets the underlying sketch of this block definition.

## Signature

```csharp
Sketch GetSketch()
```
## Parameters

None.

## Return Value

Underlying sketch

## Remarks

The returned sketch defines this block. The sketch does not appear in the FeatureManager tree.