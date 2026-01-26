---
type: method
interface: IFeatureManager
member: InsertCosmeticWeldBead
returns: Feature
parameters:
  -
    name: WeldSize
    type: System.Double
    description: Size of the weld bead
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - insertcosmeticweldbead
  - ifeaturemanager
  - feature
  - manager
  - insert
  - cosmetic
  - weld
  - bead
  - size
  - double
  - vba
  - vb
  - net
---

# IFeatureManager.InsertCosmeticWeldBead

Obsolete. Superseded by IFeatureManager::InsertCosmeticWeldBead2.

## Signature

```csharp
Feature InsertCosmeticWeldBead( 
   System.Double
WeldSize
)
```
## Parameters

- `WeldSize` (System.Double): Size of the weld bead

## Return Value

IFeature

## Remarks

Before calling this method, select the contact faces for the weld bead.

## Examples

- Insert Cosmetic Weld Bead (VBA) (Insert_Cosmetic_Weld_Bead_Example_VB.htm)
- Insert Cosmetic Weld Bead (VB.NET) (Insert_Cosmetic_Weld_Bead_Example_VBNET.htm)
- Insert Cosmetic Weld Bead (C#) (Insert_Cosmetic_Weld_Bead_Example_CSharp.htm)