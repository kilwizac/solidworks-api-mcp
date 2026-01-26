---
type: method
interface: ISurfExtrudeFeatureData
member: GetReverseOffset
returns: System.Boolean
parameters:
  -
    name: Fwd
    type: System.Boolean
    description: True gets the reverse offset setting in the forward direction, false gets it in the reverse direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfExtrudeFeatureData.SetReverseOffset
keywords:
  - getreverseoffset
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - reverse
  - offset
  - fwd
  - boolean
---

# ISurfExtrudeFeatureData.GetReverseOffset

Gets the reverse offset direction setting for the end condition of this extruded surface.

## Signature

```csharp
System.Boolean GetReverseOffset( 
   System.Boolean
Fwd
)
```
## Parameters

- `Fwd` (System.Boolean): True gets the reverse offset setting in the forward direction, false gets it in the reverse direction

## Return Value

True if the reverse offset setting is enabled, false if it is disabled

## Remarks

See
Accessing Selections that Define Features
for additional details.

## Examples

- ISurfExtrudeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISurfExtrudeFeatureData)

## See Also

- `ISurfExtrudeFeatureData.SetReverseOffset`