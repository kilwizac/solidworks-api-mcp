---
type: method
interface: ISldWorks
member: GetConfigurationNames
returns: System.Object
parameters:
  -
    name: FilePathName
    type: System.String
    description: Path and file name for the SOLIDWORKS Design document
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IConfiguration
  - IConfigurationManager
  - IModelDoc2.GetConfigurationNames
  - IModelDoc2.IGetConfigurationNames
  - ISldWorks.GetActiveConfigurationName
  - ISldWorks.GetConfigurationCount
  - ISldWorks.IGetConfigurationNames
keywords:
  - name
  - configuration
  - see
  - also
  - iconfiguration
  - names
  - getconfigurationnames
  - isldworks
  - sld
  - works
  - file
  - path
  - string
  - object
  - work
  - configurations
  - vba
---

# ISldWorks.GetConfigurationNames

Gets the names of the configuration in this SOLIDWORKS Design document, whether the document is opened or closed.

## Signature

```csharp
System.Object GetConfigurationNames( 
   System.String
FilePathName
)
```
## Parameters

- `FilePathName` (System.String): Path and file name for the SOLIDWORKS Design document

## Return Value

Array of strings containing the names of the configurations in this SOLIDWORKS Design document

## Examples

- Work With Configurations (VBA) (Work_with_Configurations_Example_VB.htm)

## See Also

- `IConfiguration`
- `IConfigurationManager`
- `IModelDoc2.GetConfigurationNames`
- `IModelDoc2.IGetConfigurationNames`
- `ISldWorks.GetActiveConfigurationName`
- `ISldWorks.GetConfigurationCount`
- `ISldWorks.IGetConfigurationNames`