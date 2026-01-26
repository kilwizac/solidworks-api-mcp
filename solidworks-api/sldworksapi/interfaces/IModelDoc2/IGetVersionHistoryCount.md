---
type: method
interface: IModelDoc2
member: IGetVersionHistoryCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.VersionHistory
  - ISldWorks.IVersionHistory
  - ISldWorks.VersionHistory
keywords:
  - version
  - number
  - document
  - solidworks
  - igetversionhistorycount
  - imodeldoc2
  - model
  - doc2
  - history
  - count
  - int32
---

# IModelDoc2.IGetVersionHistoryCount

Gets the size of the array required to hold data returend by IModleDoc2::IVersionHistory.

## Signature

```csharp
System.Int32 IGetVersionHistoryCount()
```
## Parameters

None.

## Return Value

Size of array required for the version history

## Remarks

If the document has not yet been saved, then no version history information exists and this method returns 0.

## Examples

- Document Version History (C++) (Document_Version_History_Example_CPlusPlus_COM.htm)

## See Also

- `IModelDoc2.VersionHistory`
- `ISldWorks.IVersionHistory`
- `ISldWorks.VersionHistory`