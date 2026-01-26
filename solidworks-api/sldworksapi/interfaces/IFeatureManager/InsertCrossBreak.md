---
type: method
interface: IFeatureManager
member: InsertCrossBreak
returns: Feature
parameters:
  -
    name: Angle
    type: System.Double
    description: Break angle
  -
    name: Radius
    type: System.Double
    description: Break radius
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICrossBreakFeatureData
keywords:
  - cross
  - break
  - feature
  - see
  - also
  - ifeature
  - sheet
  - metal
  - isheetmetalfeaturedata
  - insertcrossbreak
  - ifeaturemanager
  - manager
  - insert
  - angle
  - double
  - radius
  - data
  - part
  - vb
  - net
  - vba
---

# IFeatureManager.InsertCrossBreak

Inserts a cross break feature on the selected face in a sheet metal part.

## Signature

```csharp
Feature InsertCrossBreak( 
   System.Double
Angle
,
   System.Double
Radius
)
```
## Parameters

- `Angle` (System.Double): Break angle
- `Radius` (System.Double): Break radius

## Return Value

Cross break feature

## Examples

- Get Cross Break Feature Data in Sheet Metal Part (C#) (Get_Cross_Break_Feature_Data_in_Sheet_Metal_Part_Example_CSharp.htm)
- Get Cross Break Feature Data in Sheet Metal Part (VB.NET) (Get_Cross_Break_Feature_Data_in_Sheet_Metal_Part_Example_VBNET.htm)
- Get Cross Break Feature Data in Sheet Metal Part (VBA) (Get_Cross_Break_Feature_Data_in_Sheet_Metal_Part_Example_VB.htm)

## See Also

- `ICrossBreakFeatureData`