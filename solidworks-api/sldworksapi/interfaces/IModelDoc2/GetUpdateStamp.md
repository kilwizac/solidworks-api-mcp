---
type: method
interface: IModelDoc2
member: GetUpdateStamp
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
  - IFeature.GetUpdateStamp
keywords:
  - document
  - update
  - stamp
  - getupdatestamp
  - imodeldoc2
  - model
  - doc2
  - int32
---

# IModelDoc2.GetUpdateStamp

Gets the current update stamp for this document.

## Signature

```csharp
System.Int32 GetUpdateStamp()
```
## Parameters

None.

## Return Value

Current update stamp value for this document

## Remarks

The update stamp is an integer form of a time stamp. The update stamp is incremented for model state changes (i.e., suppress or unsuppress, configuration changes, feature changes, etc.) and for geometric changes (i.e., anything that requires a rebuild). This time stamp is not incremented for operations such as color changes, feature or configuration name changes, etc.

## See Also

- `IFeature.GetUpdateStamp`