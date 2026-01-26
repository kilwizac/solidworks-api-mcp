---
type: method
interface: ISldWorks
member: CheckpointConvertedDocument
returns: System.Int32
parameters:
  -
    name: DocName
    type: System.String
    description: Full pathname of the file to save
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - document
  - convert
  - checkpointconverteddocument
  - isldworks
  - sld
  - works
  - checkpoint
  - converted
  - doc
  - name
  - string
  - int32
---

# ISldWorks.CheckpointConvertedDocument

Saves the specified open document if its version is older than the version of the SOLIDWORKS Design product being used.

## Signature

```csharp
System.Int32 CheckpointConvertedDocument( 
   System.String
DocName
)
```
## Parameters

- `DocName` (System.String): Full pathname of the file to save

## Return Value

0 for no error or a bitwise OR of the errors encountered as defined in swFileSaveError_e

## Remarks

This saves the document even if the document is read-only.
This method requires that the document is currently open in your SOLIDWORKS Design session. It specifically checks if the document has been upgraded to the current version of the
SOLIDWORKS Design product in this session. If it has not, then this method has no effect.
Be careful when using this method because this method attempts to change the file permissions to read-write if the file is read-only, and if successful , it
overwrites the file and restores the permission to read-only. Although it may appear the file is safe because it is read-only before and after the operation, it might have been overwritten by this method.
This method was designed to be used with the ISldWorks event
DocumentConversionNotify
. It does not require that the notification be used, but it should work in response to that notification.