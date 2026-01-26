---
type: property
interface: ISketchHatch
member: Angle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - angle
  - isketchhatch
  - sketch
  - hatch
  - double
readonly: null
---

# ISketchHatch.Angle

Gets or sets the hatch angle.

## Signature

```csharp
System.Double Angle {get; set;}
```
## Parameters

None.

## Return Value

Hatch angle in radians

## Remarks

If the hatch is not in the active drawing view, you must
rebuild to see the hatch at its new angle.

## Examples

- ISketchHatch (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchHatch)