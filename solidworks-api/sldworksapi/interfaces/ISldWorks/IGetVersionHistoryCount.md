---
type: method
interface: ISldWorks
member: IGetVersionHistoryCount
returns: System.Int32
parameters:
  -
    name: FileName
    type: System.String
    description: Full pathname of the model for which to get the version history
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.VersionHistory
keywords:
  - solidworks
  - version
  - number
  - igetversionhistorycount
  - isldworks
  - sld
  - works
  - history
  - count
  - file
  - name
  - string
  - int32
---

# ISldWorks.IGetVersionHistoryCount

Gets the size of the array required to hold data returned by ISldWorks::IVersionHistory.

## Signature

```csharp
System.Int32 IGetVersionHistoryCount( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Full pathname of the model for which to get the version history

## Return Value

Size of array required for ISldWorks::IVersionHistory

## Remarks

If the file is not found or an error occurs, then this method returns 0.
To get the version history of a document that is currently open, use
IModelDoc2::VersionHistory
or
IModelDoc2::IVersionHistory
.

## See Also

- `ISldWorks.VersionHistory`