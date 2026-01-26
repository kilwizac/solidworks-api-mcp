---
type: method
interface: IModelDoc2
member: ReloadOrReplace
returns: System.Int32
parameters:
  -
    name: ReadOnly
    type: System.Boolean
    description: True to set the model document read-only after reload or replace, false to allow write access
  -
    name: ReplaceFileName
    type: System.String
    description: Replacement model document; null or Nothing to reload the current model document
  -
    name: DiscardChanges
    type: System.Boolean
    description: True to discard changes made to the current model document, false to abort operation if the model document was changed (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IAssemblyDoc.ComponentReload2
  - IAssemblyDoc.ReplaceComponents
keywords:
  - model
  - documents
  - see
  - also
  - imodeldoc2
  - imodeldocextension
  - interfaces
  - reload
  - replace
  - document
  - models
  - reloadorreplace
  - doc2
  - read
  - only
  - boolean
  - file
  - name
  - string
  - discard
  - changes
  - int32
---

# IModelDoc2.ReloadOrReplace

Obsolete. Superseded by IModelDocExtension::ReloadOrReplace.

## Signature

```csharp
System.Int32 ReloadOrReplace( 
   System.Boolean
ReadOnly
,
   System.String
ReplaceFileName
,
   System.Boolean
DiscardChanges
)
```
## Parameters

- `ReadOnly` (System.Boolean): True to set the model document read-only after reload or replace, false to allow write access
- `ReplaceFileName` (System.String): Replacement model document; null or Nothing to reload the current model document
- `DiscardChanges` (System.Boolean): True to discard changes made to the current model document, false to abort operation if the model document was changed (see Remarks )

## Return Value

Error codes as defined by swComponentReloadError_e

## Remarks

The model to reload or replace must be open in its own window frame.
This method does not reload or replace the model if the top assembly has been opened invisibly. In that case, make the model visible by calling
IModelDoc2::Visible
before calling this method.
You must call IModelDoc2::ReloadOrReplace after calling
IModelDoc2::ForceReleaseLocks
, which detaches a file from the file system, to re-attach a detached file to the file system. If you do not call IModelDoc2::ReloadOrReplace after calling IModelDoc2::ForceReleaseLocks, then you will experience problems with OLE objects (e.g., design tables). Any changes made to a file while it is detached are not preserved unless you save the file to disk before calling IModelDoc2::ReloadOrReplace. Additionally if you set IModelDoc2::ReloadOrReplace's DiscardChanges parameter to false and you made changes to a detached file that you are attempting to re-attach to the file system, then IModelDoc2::ReloadOrReplace will fail. DiscardChanges must be set to true to re-attach a detached file.
See
ISldWorks::CloseAndReopen
to perform a similar function with drawing documents.

## See Also

- `IAssemblyDoc.ComponentReload2`
- `IAssemblyDoc.ReplaceComponents`