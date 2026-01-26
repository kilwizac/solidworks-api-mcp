---
type: property
interface: IImportStepData
member: MapConfigurationData
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related: []
keywords:
  - mapconfigurationdata
  - iimportstepdata
  - import
  - step
  - data
  - map
  - configuration
  - boolean
  - file
  - vb
  - net
  - vba
readonly: null
---

# IImportStepData.MapConfigurationData

Gets or sets whether to import the STEP file configuration data plus geometric data or geometric data only.

## Signature

```csharp
System.Boolean MapConfigurationData {get; set;}
```
## Parameters

None.

## Return Value

True to import the STEP file configuration data plus geometric data, false to import geometric data only

## Remarks

If this property is not set, then the current default environment setting,
swImportStepConfigData
, is used. If this property is set, its setting overrides the swImportStepConfigData setting for this import only.

## Examples

- Import STEP File (C#) (Import_STEP_File_Example_CSharp.htm)
- Import STEP File (VB.NET) (Import_STEP_File_Example_VBNET.htm)
- Import STEP File (VBA) (Import_STEP_File_Example_VB.htm)