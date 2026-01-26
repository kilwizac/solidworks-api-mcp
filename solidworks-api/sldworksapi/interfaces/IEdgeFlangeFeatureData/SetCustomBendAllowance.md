---
type: method
interface: IEdgeFlangeFeatureData
member: SetCustomBendAllowance
returns: void
parameters:
  -
    name: PBendData
    type: CustomBendAllowance
    description: Pointer to the ICustomBendAllowance object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.GetCustomBendAllowance
  - IEdgeFlangeFeatureData.UseDefaultBendAllowance
keywords:
  - custom
  - bend
  - allowance
  - setcustombendallowance
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - void
---

# IEdgeFlangeFeatureData.SetCustomBendAllowance

Sets the custom bend allowance for this edge flange.

## Signature

```csharp
void SetCustomBendAllowance( 
   CustomBendAllowance
PBendData
)
```
## Parameters

- `PBendData` (CustomBendAllowance): Pointer to the ICustomBendAllowance object

## Return Value

Unknown.

## Remarks

This method is valid only if
IEdgeFlangeFeatureData::UseDefaultBendAllowance
is set to false.
See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)

## See Also

- `IEdgeFlangeFeatureData.GetCustomBendAllowance`
- `IEdgeFlangeFeatureData.UseDefaultBendAllowance`