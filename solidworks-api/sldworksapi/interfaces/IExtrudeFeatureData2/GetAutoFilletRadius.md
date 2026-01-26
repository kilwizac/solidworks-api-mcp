---
type: method
interface: IExtrudeFeatureData2
member: GetAutoFilletRadius
returns: System.Double
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
  - getautofilletradius
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - auto
  - fillet
  - radius
  - double
---

# IExtrudeFeatureData2.GetAutoFilletRadius

Gets the automatic corner fillet radius for this thin feature.

## Signature

```csharp
System.Double GetAutoFilletRadius()
```
## Parameters

None.

## Return Value

Fillet radius, if feature has automatic corner fillets enabled

## Remarks

This method only applies to thin feature extrusions. If the feature is not a thin feature extrusion, then the return value is 0.0, and the COM version of this method returns S_false in the status return value.
If the feature does not have automatic corner fillets enabled, then the return value is 0.0 and the COM version of this method returns S_false in the status return value.
To get whether automatic corner fillet is enabled, use
IExtrudeFeatureData2::GetAutoFilletCorners
.
To set automatic fillets and radius, use
IExtrudeFeatureData2::SetAutoFillet
.

## See Also

- `IExtrudeFeatureData2.IsThinFeature`