---
type: method
interface: ICornerTreatmentGroupFolder
member: GetCornerTreatments
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getcornertreatments
  - icornertreatmentgroupfolder
  - corner
  - treatment
  - group
  - folder
  - treatments
  - object
  - icornermanagementfolder
---

# ICornerTreatmentGroupFolder.GetCornerTreatments

Gets the corner treatments in this corner treatment group folder.

## Signature

```csharp
System.Object GetCornerTreatments()
```
## Parameters

None.

## Return Value

Array of IFeature s

## Remarks

Cast the returned features to
ICornerTreatmentFeatureData
or call
IFeature::GetDefinition
.

## Examples

- ICornerManagementFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerManagementFolder)