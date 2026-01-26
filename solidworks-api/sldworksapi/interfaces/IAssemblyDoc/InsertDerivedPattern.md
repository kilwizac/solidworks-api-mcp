---
type: method
interface: IAssemblyDoc
member: InsertDerivedPattern
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related: []
keywords:
  - insertderivedpattern
  - iassemblydoc
  - assembly
  - doc
  - insert
  - derived
  - pattern
  - boolean
  - number
  - instances
  - skipped
  - driving
  - feature
  - vb
  - net
  - vba
---

# IAssemblyDoc.InsertDerivedPattern

Obsolete. See IFeatureManager::CreateFeature and the Remarks in IDerivedPatternFeatureData.

## Signature

```csharp
System.Boolean InsertDerivedPattern()
```
## Parameters

None.

## Return Value

True if the derived component from the selected pattern and seed components is created, false if not

## Remarks

Use
IModelDocExtension::SelectByID2
to select the components, which must be ordered:
seed component  = 1
pattern feature = 6

## Examples

- Get Number of Instances Skipped in Driving Feature (C#) (Get_Number_of_Instances_Skipped_in_Driving_Feature_Example_CSharp.htm)
- Get Number of Instances Skipped in Driving Feature (VB.NET) (Get_Number_of_Instances_Skipped_in_Driving_Feature_Example_VBNET.htm)
- Get Number of Instances Skipped in Driving Feature (VBA) (Get_Number_of_Instances_Skipped_in_Driving_Feature_Example_VB.htm)