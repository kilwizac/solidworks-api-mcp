---
type: method
interface: IAnnotation
member: GetPMIData
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - pmi
  - getpmidata
  - iannotation
  - annotation
  - data
  - object
  - vba
---

# IAnnotation.GetPMIData

Gets the Product and Manufacturing Information (PMI) feature data object for this STEP 242 annotation.

## Signature

```csharp
System.Object GetPMIData()
```
## Parameters

None.

## Return Value

IPMIDatumData , IPMIDimensionData , IPMIGtolData ; null or Nothing if the model is a drawing or no PMI data is associated with this annotation (see Remarks )

## Remarks

This method is not valid for drawings.
Use
IAnnotation::GetPMIType
to determine the feature data object returned by this method.

## Examples

- Get PMI Data (VBA) (Get_PMI_Data_Example_VB.htm)
- Get PMI Data (C#) (Get_PMI_Data_Example_CSharp.htm)