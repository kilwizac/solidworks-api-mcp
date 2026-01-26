---
type: method
interface: ISldWorks
member: GetConfigurationCount
returns: System.Int32
parameters:
  -
    name: FilePathName
    type: System.String
    description: Path and file name for the SOLIDWORKS document
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
  - ISldWorks.GetActiveConfigurationName
  - ISldWorks.GetConfigurationNames
  - ISldWorks.IGetConfigurationNames
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - number
  - getconfigurationcount
  - isldworks
  - sld
  - works
  - count
  - file
  - path
  - name
  - string
  - int32
  - work
  - configurations
  - vba
---

# ISldWorks.GetConfigurationCount

Gets the number of configurations in the SOLIDWORKS document, whether the document is opened or closed.

## Signature

```csharp
System.Int32 GetConfigurationCount( 
   System.String
FilePathName
)
```
## Parameters

- `FilePathName` (System.String): Path and file name for the SOLIDWORKS document

## Return Value

Number of configurations in SOLIDWORKS document

## Remarks

Call this method before calling
ISldWorks::IGetConfigurationNames
to get the size of the array for that method.

## Examples

- Work With Configurations (VBA) (Work_with_Configurations_Example_VB.htm)

## See Also

- `IConfiguration`
- `IConfigurationManager`
- `ISldWorks.GetActiveConfigurationName`
- `ISldWorks.GetConfigurationNames`
- `ISldWorks.IGetConfigurationNames`