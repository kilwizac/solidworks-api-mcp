---
type: method
interface: IExtrudeFeatureData2
member: GetAutoFilletCorners
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.IsThinFeature
keywords:
  - automatic
  - corner
  - fillets
  - getautofilletcorners
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - auto
  - fillet
  - corners
  - boolean
---

# IExtrudeFeatureData2.GetAutoFilletCorners

Gets whether the corners of this thin feature are automatically filleted.

## Signature

```csharp
System.Boolean GetAutoFilletCorners()
```
## Parameters

None.

## Return Value

True if the corners are automatically filleted, false if not

## Remarks

This method only applies to thin feature extrusions.
If the feature is not a thin feature extrusion, then the return value is false, and the COM version of this method returns S_false in the status return value.
To get the fillet radius, use
IExtrudeFeatureData2::GetAutoFilletRadius
. To set automatic fillets and radius, use
IExtrudeFeatureData2::SetAutoFillet
.

## See Also

- `IExtrudeFeatureData2.IsThinFeature`