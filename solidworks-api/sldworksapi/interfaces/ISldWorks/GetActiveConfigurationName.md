---
type: method
interface: ISldWorks
member: GetActiveConfigurationName
returns: System.String
parameters:
  -
    name: FilePathName
    type: System.String
    description: Path for the SOLIDWORKS document
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IConfiguration.Name
  - IModelDoc2.GetConfigurationNames
  - IModelDoc2.IGetConfigurationNames
  - ISldWorks.GetConfigurationCount
  - ISldWorks.GetConfigurationNames
  - ISldWorks.IGetConfigurationNames
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - active
  - getactiveconfigurationname
  - isldworks
  - sld
  - works
  - name
  - file
  - path
  - string
  - vba
---

# ISldWorks.GetActiveConfigurationName

Gets the name of the active configuration in the specified SOLIDWORKS document.

## Signature

```csharp
System.String GetActiveConfigurationName( 
   System.String
FilePathName
)
```
## Parameters

- `FilePathName` (System.String): Path for the SOLIDWORKS document

## Return Value

Name of the active configuration

## Remarks

The SOLIDWORKS document does not need to be open. The configuration that was active when the SOLIDWORKS document was closed is returned. If the SOLIDWORKS document is open, then the name of the active configuration is returned.

## Examples

- Get Name of Active Configuration (VBA) (Get_Name_of_Active_Configuration_Example_VB.htm)

## See Also

- `IConfiguration.Name`
- `IModelDoc2.GetConfigurationNames`
- `IModelDoc2.IGetConfigurationNames`
- `ISldWorks.GetConfigurationCount`
- `ISldWorks.GetConfigurationNames`
- `ISldWorks.IGetConfigurationNames`