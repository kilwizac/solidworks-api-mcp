---
type: method
interface: ISldWorks
member: IGetConfigurationNames
returns: System.String
parameters:
  -
    name: FilePathName
    type: System.String
    description: Path and file name for the SOLIDWORKS document
  -
    name: Count
    type: System.Int32
    description: Number of configurations
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
  - ISldWorks.GetConfigurationNames
keywords:
  - name
  - configuration
  - see
  - also
  - iconfiguration
  - names
  - igetconfigurationnames
  - isldworks
  - sld
  - works
  - file
  - path
  - string
  - count
  - int32
---

# ISldWorks.IGetConfigurationNames

Gets the names of the configuration in this SOLIDWORKS document, whether the document is opened or closed.

## Signature

```csharp
System.String IGetConfigurationNames( 
   System.String
FilePathName
,
   System.Int32
Count
)
```
## Parameters

- `FilePathName` (System.String): Path and file name for the SOLIDWORKS document
- `Count` (System.Int32): Number of configurations

## Return Value

in-process, unmanaged C++: Pointer to an array of strings containing the names of the configurations in this SOLIDWORKS document VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISldWorks::GetConfigurationCount
to get the value for Count.

## See Also

- `IConfiguration`
- `IConfigurationManager`
- `IModelDoc2.GetConfigurationNames`
- `IModelDoc2.IGetConfigurationNames`
- `ISldWorks.GetActiveConfigurationName`
- `ISldWorks.GetConfigurationNames`