---
type: property
interface: ISketchHatch
member: Pattern
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchHatch.PatternId
keywords:
  - pattern
  - isketchhatch
  - sketch
  - hatch
  - string
readonly: null
---

# ISketchHatch.Pattern

Gets or sets the hatch pattern (also called type or name) of the sketch hatch (for example, "Stars" or "Honeycomb"), which is a string from the sldwks.ptn file.

## Signature

```csharp
System.String Pattern {get; set;}
```
## Parameters

None.

## Return Value

Name of the hatch pattern

## Examples

- ISketchHatch (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchHatch)

## See Also

- `ISketchHatch.PatternId`