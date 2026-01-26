---
type: method
interface: ISurfExtrudeFeatureData
member: GetDepth
returns: System.Double
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True gets the depth in the forward direction, false gets it in the reverse direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfExtrudeFeatureData.SetDepth
keywords:
  - getdepth
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - depth
  - forward
  - boolean
  - double
---

# ISurfExtrudeFeatureData.GetDepth

Gets the depth of the feature in the forward or reverse direction.

## Signature

```csharp
System.Double GetDepth( 
   System.Boolean
Forward
)
```
## Parameters

- `Forward` (System.Boolean): True gets the depth in the forward direction, false gets it in the reverse direction

## Return Value

Extrusion depth

## Remarks

See
Accessing Selections that Define Features
for additional details.

## Examples

- ISurfExtrudeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISurfExtrudeFeatureData)

## See Also

- `ISurfExtrudeFeatureData.SetDepth`