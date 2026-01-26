---
type: property
interface: IEquationMgr
member: LinkToFile
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IEquationMgr.UpdateValuesFromExternalEquationFile
keywords:
  - linktofile
  - iequationmgr
  - equation
  - mgr
  - link
  - file
  - boolean
readonly: null
---

# IEquationMgr.LinkToFile

Gets or sets whether the equation is linked to an exported equation text (.txt) file.

## Signature

```csharp
System.Boolean LinkToFile {get; set;}
```
## Parameters

None.

## Return Value

True if the equation is linked to an exported equation text ( .txt ) file, false if not

## Remarks

The setter of this property works only after you have set
IEquationMgr::FilePath
.

## See Also

- `IEquationMgr.UpdateValuesFromExternalEquationFile`