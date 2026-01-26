---
type: method
interface: IExtrudeFeatureData2
member: SetAutoFillet
returns: System.Boolean
parameters:
  -
    name: AutoFillet
    type: System.Boolean
    description: True to fillet the corners automatically, false to not
  -
    name: Radius
    type: System.Double
    description: Fillet radius, if automatic corner fillets is enabled
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
  - setautofillet
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - auto
  - fillet
  - boolean
  - radius
  - double
---

# IExtrudeFeatureData2.SetAutoFillet

Sets the automatic corner fillet properties of this thin feature.

## Signature

```csharp
System.Boolean SetAutoFillet( 
   System.Boolean
AutoFillet
,
   System.Double
Radius
)
```
## Parameters

- `AutoFillet` (System.Boolean): True to fillet the corners automatically, false to not
- `Radius` (System.Double): Fillet radius, if automatic corner fillets is enabled

## Return Value

True if the corners are automatically filleted, false if not

## Remarks

This method only applies to thin feature extrusions. If the feature is not a thin feature extrusion, then no action is taken and the COM version of this method returns S_false in the status return value.
If disabling the automatic corner fillets property (AutoFillet = false), then the Radius value is not used.
To get the automatic corner fillet flag, use
IExtrudeFeatureData2::GetAutoFilletCorners
. To get the fillet radius, use
IExtrudeFeatureData2::GetAutoFilletRadius
.

## See Also

- `IExtrudeFeatureData2.IsThinFeature`