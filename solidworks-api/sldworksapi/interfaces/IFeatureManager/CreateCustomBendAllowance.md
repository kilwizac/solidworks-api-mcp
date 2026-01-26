---
type: method
interface: IFeatureManager
member: CreateCustomBendAllowance
returns: CustomBendAllowance
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBendsFeatureData.SetCustomBendAllowance
  - IEdgeFlangeFeatureData.SetCustomBendAllowance
  - IFeatureManager.InsertSheetMetalBaseFlange
  - IFeatureManager.InsertSheetMetalHem2
  - IHemFeatureData.SetCustomBendAllowance
  - IJogFeatureData.SetCustomBendAllowance
  - IMiterFlangeFeatureData.SetCustomBendAllowance
  - IOneBendFeatureData.SetCustomBendAllowance
  - ISheetMetalFeatureData.SetCustomBendAllowance
  - ISketchedBendFeatureData.SetCustomBendAllowance
keywords:
  - bend
  - allowance
  - createcustombendallowance
  - ifeaturemanager
  - feature
  - manager
  - create
  - custom
  - insert
  - sheet
  - metal
  - hem
  - vba
  - vb
  - net
---

# IFeatureManager.CreateCustomBendAllowance

Creates a custom bend allowance to use when creating a sheet metal feature.

## Signature

```csharp
CustomBendAllowance CreateCustomBendAllowance()
```
## Parameters

None.

## Return Value

Pointer to the ICustomBendAllowance object

## Examples

- Insert Sheet Metal Hem (VBA) (Insert_Sheet_Metal_Hem_Example_VB.htm)
- Insert Sheet Metal Hem (VB.NET) (Insert_Sheet_Metal_Hem_Example_VBNET.htm)
- Insert Sheet Metal Hem (C#) (Insert_Sheet_Metal_Hem_Example_CSharp.htm)

## See Also

- `IBendsFeatureData.SetCustomBendAllowance`
- `IEdgeFlangeFeatureData.SetCustomBendAllowance`
- `IFeatureManager.InsertSheetMetalBaseFlange`
- `IFeatureManager.InsertSheetMetalHem2`
- `IHemFeatureData.SetCustomBendAllowance`
- `IJogFeatureData.SetCustomBendAllowance`
- `IMiterFlangeFeatureData.SetCustomBendAllowance`
- `IOneBendFeatureData.SetCustomBendAllowance`
- `ISheetMetalFeatureData.SetCustomBendAllowance`
- `ISketchedBendFeatureData.SetCustomBendAllowance`