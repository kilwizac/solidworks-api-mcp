---
type: method
interface: IFeatureManager
member: MakeStyledCurves2
returns: System.Boolean
parameters:
  -
    name: Tolerance
    type: System.Double
    description: Deviation permitted from the selected geometry
  -
    name: Mode
    type: System.Int32
    description: 1 = Convert the selected geometry to construction geometry 11 = delete the selected geometry
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - splines
  - fit
  - makestyledcurves2
  - ifeaturemanager
  - feature
  - manager
  - make
  - styled
  - curves2
  - tolerance
  - double
  - mode
  - int32
  - boolean
---

# IFeatureManager.MakeStyledCurves2

Fits a spline to the preselected sketch segments to make a smooth edge on the model.

## Signature

```csharp
System.Boolean MakeStyledCurves2( 
   System.Double
Tolerance
,
   System.Int32
Mode
)
```
## Parameters

- `Tolerance` (System.Double): Deviation permitted from the selected geometry
- `Mode` (System.Int32): 1 = Convert the selected geometry to construction geometry 11 = delete the selected geometry

## Return Value

True if fit spline is created, false if not